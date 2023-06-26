import './FileUploader.style.scss';
import React, { useEffect, useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
// Types
import { FileUploaderProps } from './FileUploader.types';
// Components
import Button from '../Button';

const FileUploader: React.FC<FileUploaderProps> = props => {
  const {
    onChange,
  } = props;

  const id = `aia-poss-file-input-${Math.random()}`;
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    return () => {
      removeUploadedFile();
    }
  }, []);

  const handleFileUpload = (files: FileList | null) => {
    const file = files?.[0] || null;
    
    if (!file) return;
    setFileName(file.name);
    setFile(URL.createObjectURL(file));
    onChange?.(files);
  }

  const removeUploadedFile = () => {
    if (!file) return;
    setFile("");
    setFileName("");
    URL.revokeObjectURL(file);
  }

  return (
    <div className='file-uploader-container'>
      <input
        id={id}
        type="file"
        accept='image/*'
        onChange={e => handleFileUpload(e.target.files)}
        hidden
      />
      {fileName && file ? (
        <div className='uploaded-file-container'>
          <Button
            className='remove-file-button'
            showText={false}
            showLeftIcon={true}
            iconName='xmark'
            text='Remove image'
            size='sm'
            onClick={removeUploadedFile}
          />
          <img src={file} alt={fileName} />
        </div>
      ) : (
        <label className='file-uploader' htmlFor={id}>
          <FaFileUpload id="file-upload-icon" />
          <span className='label'>Drag and drop or click to select file/s.</span>
        </label>
      )}
    </div>
  )
}

export default FileUploader;