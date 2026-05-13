interface IconHeritageProps {
    color?: string;
    width: number;
    height: number;
}

const pathStrokeProps = {
    fill: "none" as const,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeMiterlimit: 10,
};

export function IconHeritage({ width, height, color }: IconHeritageProps) {
    const stroke = color ?? "#C9A84C";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width={width}
            height={height}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <g>
                    <path
                        d="M27,15H5c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1v12C28,14.6,27.6,15,27,15z M6,13h20V3H6V13z"
                        stroke={stroke}
                        {...pathStrokeProps}
                    />
                </g>
                <g>
                    <path
                        d="M16,12c-1.7,0-3-1.8-3-4s1.3-4,3-4s3,1.8,3,4S17.7,12,16,12z"
                        stroke={stroke}
                        {...pathStrokeProps}
                    />
                </g>
                <path
                    d="M29.9,16.5C29.7,16.2,29.4,16,29,16c-2.2,0-4.3,1-5.6,2.8L22.5,20c-1.1,1.3-2.8,2-4.5,2h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.9 c1.6,0,3.1-1.3,3.1-2.9c0,0,0-0.1,0-0.1c0-0.5-0.5-1-1-1l-6.1,0c-3.6,0-6.5,1.6-8.1,4.2l-2.7,4.2c-0.2,0.3-0.2,0.7,0,1l3,5 c0.1,0.2,0.4,0.4,0.6,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.2-3.8,12.7-3.8c3.3,0,6.3-1.8,7.9-4.7l2.7-4.8 C30,17.2,30,16.8,29.9,16.5z"
                    stroke={stroke}
                    {...pathStrokeProps}
                />
                <path
                    d="M9,2H8H5v3v1v1c2.8,0,5-2.2,5-5H9z"
                    stroke={stroke}
                    {...pathStrokeProps}
                />
                <path
                    d="M5,10v1v3h3h1h1c0-2.8-2.2-5-5-5V10z"
                    stroke={stroke}
                    {...pathStrokeProps}
                />
                <path
                    d="M23,14h1h3v-3v-1V9c-2.8,0-5,2.2-5,5H23z"
                    stroke={stroke}
                    {...pathStrokeProps}
                />
                <path
                    d="M27,6V5V2h-3h-1h-1c0,2.8,2.2,5,5,5V6z"
                    stroke={stroke}
                    {...pathStrokeProps}
                />
            </g>
        </svg>
    );
}
