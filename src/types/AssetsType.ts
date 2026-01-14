export type IconsType = {
    href: string;
    title: string;
    desc: string;
    size: string;
}

export type PicturesType = {
    PFP: ImageMetadata;
    categories: {
        projects: ImageMetadata;
        experience: ImageMetadata;
        leadership: ImageMetadata;
        certifications: ImageMetadata;
        honors: ImageMetadata;
    }
}

export type TechnologiesType = {
    name: string;
    color: string;
    icon: IconsType;
    kind: string;
    domains: string[];
}

export type AssetsType = {
    pictures: PicturesType;
    icons: {
        email: IconsType;
        phone: IconsType;
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
        hamburger_menu: IconsType;
        hamburger_close: IconsType;
        home: IconsType;
        sun: IconsType;
        moon: IconsType;
        translate: IconsType;
        chevron_up: IconsType;
        chevron_down: IconsType;
        angles_down: IconsType;
        devices: IconsType;
    };
    technologies: {
        antdesign: TechnologiesType;
        arduino: TechnologiesType;
        astro: TechnologiesType;
        autocad: TechnologiesType;
        axios: TechnologiesType;
        baremetal: TechnologiesType;
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
    };
    flags: {
        de: IconsType;
        us: IconsType;
        mx: IconsType;
    }
}