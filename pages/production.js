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
            <div onClick={() => openExpand(i)} className={i.open ? 'expandButton openedExpand' : 'expandButton'} style={{display: 'block'}}  >
                <img src={i.photo} width={'200px'} height={'200px'}/>
                {i.title}
                <Expand open={i.open}
                        className={'expand'}
                        duration={1000}>
                    <div>{i.desc}</div>
                </Expand>
            </div>
        )
    });

    return (
        <Layout>
            <div className={"production"} style={{height: 1000}}>
                <div className={"list_div"} style={{display: 'flex'}}>
                    {list}
                </div>

            </div>
        </Layout>
    )
};
export default Production;