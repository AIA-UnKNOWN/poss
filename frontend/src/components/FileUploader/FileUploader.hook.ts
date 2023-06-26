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

  return {
    fileName,
    file,
    handleFileUpload,
  }
}

export default useFileUploader;