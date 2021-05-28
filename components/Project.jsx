

const Project = ({name,link,imgsrc}) => {

    return(
        <div style={{display:"flex",alignItems:'center'}}>
            
            <div style={{width:"30vw", display:'table'}}>
            <a className="projectTitle" href={link} style={{fontSize:'2vw',display:'table-cell',verticalAlign:'center',color:'blue',textDecoration:'underline'}}>{name}</a>
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