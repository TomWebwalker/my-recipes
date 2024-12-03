import { Label } from "@radix-ui/react-label";
import { useRef, useState } from "react";
import { Input } from "../ui/input";

export default function FileUpload({ label }: { label: string }) {
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        handleFile(file);
    };

    const handleFile = (file: File | undefined) => {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPhotoPreview(null);
        }
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setIsDragging(true);
        } else if (e.type === "dragleave") {
            setIsDragging(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];
        handleFile(file);
        if (fileInputRef.current) {
            fileInputRef.current.files = e.dataTransfer.files;
        }
    };


    return (
        <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="photo">{label}</Label>
            <div
                className={`border-2 border-dashed rounded-md p-4 text-center ${isDragging ? "border-primary bg-primary/10" : "border-gray-300"
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <Input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    ref={fileInputRef}
                    className="hidden"
                />
                <div className="cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <p>Drag and drop your image here or click to select</p>
                </div>
                {photoPreview && (
                    <div className="mt-2">
                        <img
                            src={photoPreview}
                            alt="Preview"
                            className="rounded-md max-h-[200px] object-cover mx-auto"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}