import Link from 'next/link'

const WebPageLink = ({name,link}) => {
    
    return(
        <div style={{alignContent:'center'}}>
            <a href={link} style={{fontSize:'1.8vw',color:'blue',whiteSpace:'nowrap'}}>{name}</a>


        </div>
    )
}

export default WebPageLink