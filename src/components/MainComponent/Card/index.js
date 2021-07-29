import React, { useState, useContext, createContext } from 'react'

import {
    Container, Group, Title, SubTitle, Text, Feature, FeatureTitle, FeatureText,
    FeatureClose, Maturity, Content, Meta, Entities, Item, Image, 
} from './styles/card'




export const FeatureContext = createContext();
export default function Card({ children, ...restProps }) {
    const [showFeatures, setShowFeatures] = useState(false);
    const [itemFeature, setItemFeature] = useState({});
    // console.log(showFeatures);
    // console.log(itemFeature)

    return (
        <FeatureContext.Provider
            value={{ showFeatures, setShowFeatures, itemFeature, setItemFeature }}
        >
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
};

Card.Title = function CardTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
};

Card.SubTitle = function CardSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
};
Card.Text = function CardText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
};
Card.Entities = function CardEntities({ children, ...restProps }) {
    return <Entities {...restProps}>{children}</Entities>
};
Card.Meta = function CardMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>
};
 
Card.Item = function CardItem({ item, children, ...restProps }) {
    const { setShowFeatures, setItemFeature } = useContext(FeatureContext);
    return (
        <Item onClick={() => {
            // console.log('clicked here')
            setShowFeatures(true);
            setItemFeature(item);
        }}
            {...restProps}>{children}</Item>
    );
};

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />
}
Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const { showFeatures, itemFeature, setShowFeatures } = useContext(FeatureContext);
    return showFeatures ? (
        <Feature {...restProps} src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeatures(false)}>
                    <img src='/images/icons/close.png' alt='close' />
                </FeatureClose>
           
            <Group margin='30px 0px' flexDirection='row' alignItems='center'>
                <Maturity rating={itemFeature.maturity} >
                    {itemFeature.maturity > 12 ? 'PG' : itemFeature.maturity}
                </Maturity>
                <FeatureText fontWeight='bold'>
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </FeatureText>
            </Group>
            {children}
            </Content>
        </Feature>
    ) : null;
}