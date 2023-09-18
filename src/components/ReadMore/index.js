// Write your code here
import {useState} from 'react'

import {
    MainContainer,
    ResponsiveContainer,
    Heading,
    SubText,
    ImageContainer,
    Image,
    Description,
    Button
} from './styledComponents'

const ReadMore = props => {
    const {reactHooksDescription} = props

    const [btn, setBtn] = useState(false)

    const slicedDescription = reactHooksDescription.slice(0, 170)

    const onClickBtn = () => {
        setBtn(prevState => !prevState)
    }

    return(
        <MainContainer>
            <ResponsiveContainer>
                <Heading> React Hooks </Heading>
                <SubText> Hooks are a new addition to React </SubText>
                <ImageContainer>
                    <Image src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png" alt="react hooks" />
                    <Description> {btn? reactHooksDescription: slicedDescription} </Description>
                    <Button type="button" onClick={onClickBtn} > {btn? 'Read Less': 'Read More'}</Button>
                </ImageContainer>
                
            </ResponsiveContainer>
        </MainContainer>
    )
}

export default ReadMore