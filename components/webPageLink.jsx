import Link from 'next/link'

const WebPageLink = ({name,link}) => {
    return(
        <div style={{alignContent:'center'}}>
            <a href={link}>{name}</a>


        </div>
    )
}

export default WebPageLink