import './FileUploader.style.scss';
import React, { useRef } from 'react';
import { FaFileUpload } from 'react-icons/fa';
// Types
import type { FileUploaderProps } from './FileUploader.types';
// Hooks
import useFileUploader from './FileUploader.hook';

const FileUploader: React.FC<FileUploaderProps> = props => {
  const id = `aia-poss-file-input-${Math.random()}`;
  const fileUploaderContainerRef = useRef(null);
  const {
    fileName,
    file,
    handleFileUpload,
    dropHandler,
    dragOverHandler,
  } = useFileUploader(props);

  const dragEnterHandler = e => {
    e.preventDefault();
    fileUploaderContainerRef?.current?.classList.add('drag-enter');
  }

  const dragLeaverHandler = e => {
    e.preventDefault();
    fileUploaderContainerRef?.current?.classList.remove('drag-enter');
  }

  return (
    <div
      ref={fileUploaderContainerRef}
      className='file-uploader-container'
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaverHandler}
    >
      <input
        id={id}
        type="file"
        accept='image/*'
        name={props.name}
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