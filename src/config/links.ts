import type { GeneralLinksType, SystemLinksType } from "@typing/LinksType";

export const SYSTEM = {
    domain: "https://alexsaballos.dev",
    pfp: "https://alexsaballos.dev/assets/pictures/pfp.webp",
    logo: "https://alexsaballos.dev/assets/pictures/my_logo.webp",
    API: {
        google_analytics: "https://www.googletagmanager.com",
        resend: "https://api.alexsaballos.dev/contact.php",
        webfinger: "http://webfinger.net",
        webmention: "https://webmention.io/alexsaballos.dev_en_/webmention"
    }
} as const satisfies SystemLinksType;

export const LINKS = {
    organizations: {
        abet: "https://www.abet.org/",
        arpels: "https://labor.arkansas.gov/licensing/state-board-of-licensure-for-professional-engineers-and-professional-surveyors/engineer-intern-ei-licensure-overview/",
        asgc: "https://www.arkansasspacegrant.org/",
        hu: {
            main: "https://harding.edu",
            engineering: "https://www.harding.edu/arts-sciences/engineering-physics/academic-programs/",
            math: "https://www.harding.edu/arts-sciences/math/",
            asi: "https://www.harding.edu/about/offices-departments/american-studies-institute/programs-training/",
            honors: "https://www.harding.edu/honors/",
            arc: "https://www.harding.edu/life-at-harding/arc/academic-resources/index.html"
        },
        ieee: "https://www.ieee.org/",
        ncees: "https://ncees.org/outreach/ncees-graduation-honor-cords/",
        sidimaqsa: "https://sidimaqsa.com/",
        wisp: "https://www.wispweb.org/"
    },
    profiles: {
        coursera: "https://www.coursera.org/learner/alexsaballos",
        credly: "https://www.credly.com/users/alexsaballos",
        edx: "https://profile.edx.org/u/alexsaballos",
        figma: "https://www.figma.com/@alexsaballos",
        github: "https://github.com/alexsaballos",
        gravatar: "https://gravatar.com/alexsaballos",
        googledev: "https://g.dev/alexsaballos",
        handshake: "https://app.joinhandshake.com/profiles/alexsaballos",
        khanacademy: "https://www.khanacademy.org/profile/alexsaballosr",
        linkedin: "https://www.linkedin.com/in/alexsaballosr/",
        merit: "https://meritpages.com/alexsaballos",
        orcid: "https://orcid.org/0009-0006-9378-4212",
        peoplecert: "https://www.peoplecert.org/public-profile?ed=XCHu3ZqUTNJBe8JMoFGOl1FSa2IleHoP",
        quizlet: "https://quizlet.com/user/alexsaballosr/"
    },
    certifications: {
        aha: {
            main: "https://www.heart.org/",
            award: "https://ecards.heart.org/student/eCards?cid=0864054B-208D-40E2-B4DD-9C05AA68B3B5"
        },
        coursera: {
            main: "https://www.coursera.org/learn/java-programming",
            profile: "https://www.coursera.org/learner/alexsaballos",
            award: "https://coursera.org/share/c3adae20358ad94fe6c9c5572a6147ef"
        },
        credly: {
            profile: "https://www.credly.com/users/alexsaballos",
            award: "https://www.credly.com/badges/b45ec691-e8b4-438d-8f49-df1e603622a5/public_url"
        },
        cs50: {
            main: "https://code-fu.net.ni/",
            award: "https://certificates.cs50.io/a876293f-4d46-4232-8fc2-397a90cfb3d7.pdf?size=letter"
        },
        edx: "https://profile.edx.org/u/alexsaballos",
        iassc: {
            main: "https://iassc.org/",
            profile: "https://www.peoplecert.org/public-profile?ed=XCHu3ZqUTNJBe8JMoFGOl1FSa2IleHoP",
            award: ""
        },
        parchment: "https://www.parchment.com/u/award/e6ff0291d43e184f3aa6a25b1191a13b"
    }
} as const satisfies GeneralLinksType;