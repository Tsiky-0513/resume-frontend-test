import { CSSProperties } from "react";

export interface Menu {
    prefixIcon?: string;
    label: string;
    route?: string;
    suffixIcon?: string;
    suffixImage?: string;
    prefixImage?: string;
    iconStyle?: CSSProperties;
    className?: string;
}