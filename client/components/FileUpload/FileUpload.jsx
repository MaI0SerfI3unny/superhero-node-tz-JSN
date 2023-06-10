const FileUpload = ({handleFile, formik, hero, name, type}) => {
    return(
        <div className="file_upload_container">
        {!hero && <img src={formik.values[name] ? formik.values[name] : "/incognito.jpeg"}/>}
        <br/>
        <input 
            type={type}
            name={name}
            onChange={handleFile}/>
        <br/><br/>
    </div>
    )
}

export default FileUpload