export interface FileUploaderProps {
  name?: string;
  onChange?: (files: FileList | null) => void;
}