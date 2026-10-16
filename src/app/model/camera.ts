export const CAMERATYPES = ["DSLR", "Mirrorless", "Compacta"] as const;

export type CameraType = (typeof CAMERATYPES)[number];

export interface Camera {
    id: string;
    modelName: string;
    cameraType: CameraType;
    resolution: string;
    stock: number;
    notes: string;
    inOffer: boolean;
}

export interface CameraForm {
    modelName: string;
    cameraType: CameraType;
    resolution: string;
    stock: number;
    notes: string;
    inOffer: boolean;
}