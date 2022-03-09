export const structuredData = () => {
    <JSONLD>
        <Product name="Product Name">
            <AggregateRating ratingValue={4.3} reviewCount={197} />
            <GenericCollection type="review">
                <Review name="It's awesome" reviewBody="This is Great! My family loves it" datePublished="11/22/1963">
                    <Author name="Jerry" />
                    <Location name="Chicago, IL" />
                    <Rating ratingValue={5} />
                </Review>
                <Review name="Very cool" reviewBody="I like this a lot. Very cool product" datePublished="11/22/1963">
                    <Author name="Cool Carl" />
                    <Location name="Chicago, IL" />
                    <Rating ratingValue={4} />
                </Review>
            </GenericCollection>
        </Product>
    </JSONLD>
}