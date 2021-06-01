

const Project = ({name,link,imgsrc,github,github2,description}) => {

    return(
        <div style={{display:"flex",alignItems:'center',bottomBorder:'.5',borderStyle:'solid none'}}>
            
            <div style={{width:"30vw", height:"50vh", display:'table'}}>
            <div style={{display:"flex",flexDirection:'column',verticalAlign:'middle'}}>
            <a target="_blank" className="projectTitle" href={link} style={{fontSize:'12',display:'table-cell',verticalAlign:'center',color:'blue',textDecoration:'underline'}}>{name}</a>
            <br />
            <a target="_blank" className="projectTitle" href={link} style={{fontSize:'12',display:'table-cell',color:'blue',textDecoration:'underline'}}>{github}</a>
            
            <a target="_blank" className="projectTitle" href={link} style={{fontSize:'12',display:'table-cell',verticalAlign:'center',color:'blue',textDecoration:'underline'}}>{github2}</a>
            <p style={{fontSize:'12'}}>{description}</p>
            </div>

            </div>
            <div>            <img 
            style={{width:"50vw",verticalAlign:'center'}}
            src={imgsrc}>

            </img>
            </div>


        </div>
    )
}

export default Project