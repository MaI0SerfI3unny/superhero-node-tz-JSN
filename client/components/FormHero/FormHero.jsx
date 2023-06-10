import { useFormik } from "formik"
import heroForm from "../../form/hero.json"
import FileUpload from "../FileUpload/FileUpload"

const FormHero = ({onCreate, hero}) => {
    console.log(heroForm)
    const formik = useFormik({
        initialValues:{
            nickname: hero? hero.data.nickname : "",
            real_name: hero? hero.data.real_name : "",
            origin_description: hero? hero.data.origin_description : "",
            superpowers: hero? hero.data.superpowers : "",
            catch_phrase: hero? hero.data.catch_phrase : "",
            Images: hero? hero.data.hero_image.url : ""
        }
    })

    const handleFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const dataURL = reader.result;
          formik.setFieldValue("Images", dataURL);
        };
        reader.readAsDataURL(file);
    };

    return(
        <form onSubmit={(e) => onCreate(e, formik.values)}>
            {heroForm.map((el,key) => 
                <div key={key}>
                    <p>{el.title}</p>
                    {el.type === "textarea" ?
                    <textarea 
                        name={el.name}
                        value={formik.values[el.name]}
                        onChange={formik.handleChange}/> 
                    : el.type === "file" ?    
                    <FileUpload
                        hero={hero}
                        name={el.name} 
                        type={el.type}
                        formik={formik} 
                        handleFile={handleFile}/> 
                    :
                    <input 
                        type={el.type}
                        name={el.name}
                        value={formik.values[el.name]}
                        onChange={formik.handleChange}/>}
                </div>)}
            <button>Submit</button>
        </form>)
}

export default FormHero