import './FileUploader.style.scss';
import React from 'react';
import { FaFileUpload } from 'react-icons/fa';
// Types
import type { FileUploaderProps } from './FileUploader.types';
// Hooks
import useFileUploader from './FileUploader.hook';

const FileUploader: React.FC<FileUploaderProps> = props => {
  const id = `aia-poss-file-input-${Math.random()}`;
  const {
    fileName,
    file,
    handleFileUpload,
  } = useFileUploader(props);

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
        <label className='uploaded-file-container' htmlFor={id}>
          <img src={file} alt={fileName} />
        </label>
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