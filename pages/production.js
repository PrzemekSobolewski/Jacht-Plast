import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Layout from "../components/Layout";
import Expand from "react-expand-animated"
import dreamer from "../assets/images/production/dreamer.jpg"

const elements = [
    {
        id: 1,
        open: false,
        photo: dreamer,
        title: 'Tes 32 Dreamer',
        desc: 'text 1'
    },
    {
        id: 2,
        open: false,
        photo: dreamer,
        title: 'Tes 32 Dreamer',
        desc: 'text 2'
    }
];
const Production = () => {
    const [data, setData] = useState(elements);


    const openExpand = (element) => {
        setData(data.map(i => {
                if(element.id === i.id && i.open === true) {
                    i.open = false;
                    return i;
                }
                i.open = element.id === i.id;
                return i;
            })
        );
    };

    let list = data.map(i => {
        return (
            <div onClick={() => openExpand(i)} className={'expandButton'}>
                {i.title}
            </div>
        )
    });

    let content = data.map(i => {
        return (
            <Expand open={i.open}
                    duration={1000}>
                <div style={{display: "flex"}}>
                    <img src={i.photo}/>
                    <div>{i.desc}</div>
                </div>
            </Expand>
        )
    });
    return (
        <Layout>
            <div className={"production"} style={{height: 1000}}>
                <div className={"list_div"}>
                    {list}
                </div>

                <div className={"content_div"}>
                    {content}
                </div>
            </div>
        </Layout>
    )
};
export default Production;