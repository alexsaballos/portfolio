export type IconsType = {
    href: string;
    title: string;
    desc: string;
    size: string;
}

export type IconsListType = {
    email: IconsType;
    phone: IconsType;
    hourglass: IconsType;
    linkedin: IconsType;
    github: IconsType;
    handshake: IconsType;
    merit: IconsType;
    wisp: IconsType;
    hu: IconsType;
    projects: IconsType;
    experience: IconsType;
    leadership: IconsType;
    certifications: IconsType;
    honors: IconsType;
    contact: IconsType;
    hamburger_open: IconsType;
    hamburger_close: IconsType;
    home: IconsType;
    sun: IconsType;
    moon: IconsType;
    translate: IconsType;
    chevron_up: IconsType;
    chevron_down: IconsType;
    angles_down: IconsType;
    devices: IconsType;
}

export type PathsListType = {
    scripts: string;
    favicons: string;
    pictures: string;
    videos: string;
}

export type VideosListType = {
    IntroVideo: string;
}

export type PicturesListType = {
    ogImage: string;
    PFP: ImageMetadata;
    categories: {
        projects: ImageMetadata;
        experience: ImageMetadata;
        leadership: ImageMetadata;
        certifications: ImageMetadata;
        honors: ImageMetadata;
    }
}

export type TechnologiesNamesType = "antdesign" | "arduino" | "astro" | "autocad" | "axios" | "baremetal" | "bootstrap" | "c" | "cpanel" | "cpp" | "csharp" | "css" | "daisyui" | "directus" | "flask" | "html" | "java" | "javascript" | "kicad" | "multisim" | "mysql" | "opencv" | "php" | "phpmyadmin" | "python" | "raspberrypi" | "react" | "sketchup" | "sqlite" | "tailwindcss" | "typescript" | "ultiboard" | "winui";

export type TechnologiesType = {
    name: string;
    key: TechnologiesNamesType;
    color: string;
    icon: IconsType;
    kind: string;
    domains: string[];
}

export type TechnologiesListType = {
    antdesign: TechnologiesType;
    arduino: TechnologiesType;
    astro: TechnologiesType;
    autocad: TechnologiesType;
    axios: TechnologiesType;
    baremetal: TechnologiesType;
    bootstrap: TechnologiesType;
    c: TechnologiesType;
    cpanel: TechnologiesType;
    cpp: TechnologiesType;
    csharp: TechnologiesType;
    css: TechnologiesType;
    daisyui: TechnologiesType;
    directus: TechnologiesType;
    flask: TechnologiesType;
    html: TechnologiesType;
    java: TechnologiesType;
    javascript: TechnologiesType;
    kicad: TechnologiesType;
    multisim: TechnologiesType;
    mysql: TechnologiesType;
    opencv: TechnologiesType;
    php: TechnologiesType;
    phpmyadmin: TechnologiesType;
    python: TechnologiesType;
    raspberrypi: TechnologiesType;
    react: TechnologiesType;
    sketchup: TechnologiesType;
    sqlite: TechnologiesType;
    tailwindcss: TechnologiesType;
    typescript: TechnologiesType;
    ultiboard: TechnologiesType;
    winui: TechnologiesType;
}

export type FlagsListType = {
    de: {
        picture: ImageMetadata;
        icon: IconsType;
    }
    mx: {
        picture: ImageMetadata;
        icon: IconsType;
    }
    us: {
        picture: ImageMetadata;
        icon: IconsType;
    }
}

export type FaviconsPngType = {
    src: string;
    sizes: string;
    type: string;
}

export type FaviconsSvgType = {
    src: string;
    type: string;
    purpose: string;
}

export type FaviconListType = {
    android192: FaviconsPngType;
    android512: FaviconsPngType;
    apple120: FaviconsPngType;
    apple152: FaviconsPngType;
    apple167: FaviconsPngType;
    apple180: FaviconsPngType;
    mstile150: FaviconsPngType;
    safari_mask: FaviconsSvgType;
}