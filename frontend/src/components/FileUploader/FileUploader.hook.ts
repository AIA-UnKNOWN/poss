import { useEffect, useState } from 'react';
// Types
import type { FileUploaderProps } from './FileUploader.types';

const useFileUploader = (props: FileUploaderProps) => {
  const {
    onChange,
  } = props;

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

  const dropHandler = e => {
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          setFileName(file.name);
          setFile(URL.createObjectURL(file));
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...e.dataTransfer.files].forEach((file, i) => {
        setFileName(file.name);
        setFile(URL.createObjectURL(file));
      });
    }
  }

  const dragOverHandler = e => {
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
  }

  return {
    fileName,
    file,
    handleFileUpload,
    dropHandler,
    dragOverHandler,
  }
}

export default useFileUploader;