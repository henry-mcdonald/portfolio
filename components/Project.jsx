

const Project = ({name,link,imgsrc,github,github2,description}) => {

    return(
        <div style={{display:"flex",alignItems:'center'}}>
            
            <div style={{width:"30vw", display:'table'}}>
            <div style={{display:"flex",flexDirection:'column'}}>
            <a target="_blank" className="projectTitle" href={link} style={{fontSize:'2vw',display:'table-cell',verticalAlign:'center',color:'blue',textDecoration:'underline'}}>{name}</a>
            <br />
            <a target="_blank" className="projectTitle" href={link} style={{fontSize:'1.2vw',display:'table-cell',color:'blue',textDecoration:'underline'}}>{github}</a>
            
            <a target="_blank" className="projectTitle" href={link} style={{fontSize:'1.2vw',display:'table-cell',verticalAlign:'center',color:'blue',textDecoration:'underline'}}>{github2}</a>
            <p style={{fontSize:'1.2vw'}}>{description}</p>
            </div>

            </div>
            <div>            <img 
            style={{width:"50vw"}}
            src={imgsrc}>

            </img>
            </div>


        </div>
    )
}

export default Project