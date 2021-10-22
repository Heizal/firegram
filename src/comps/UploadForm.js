import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null); //for when they select an invalid type

    const types = ['image/png', 'image/jpeg'] //allow users to uplaod these types



    const changeHandler = (e) =>{
        let selected = e.target.files[0]; //this allows us to select and target the first file

        if (selected && types.includes(selected.type)) {
            setFile(selected); //this validates if there is a file and if if the type is a png or jpeg. if both are true it will update the state
            setError(''); //this removes the error message when we select the right file
        } else{
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }


    return (
        <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
    )  
}

export default UploadForm;
