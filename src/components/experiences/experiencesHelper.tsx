export type IconNames =
    | "bashIcon"
    | "confluenceIcon"
    | "cssIcon"
    | "expressIcon"
    | "htmlIcon"
    | "javascriptIcon"
    | "jiraIcon"
    | "markdownIcon"
    | "mongodbIcon"
    | "nodejsIcon"
    | "pythonIcon"
    | "reactIcon"
    | "typescriptIcon"
    | "bashIconDark"
    | "cssIconDark"
    | "htmlIconDark"
    | "javascriptIconDark"
    | "typescriptIconDark";

export interface IJobDetailsProps {
    topLeft: {
        label: string;
        imgSrc: IconNames;
    };
    topRight: {
        label: string;
        imgSrc: IconNames;
    };
    bottomLeft: {
        label: string;
        imgSrc: IconNames;
    };
    bottomRight: {
        label: string;
        imgSrc: IconNames;
    };
    hidden?: boolean;
    darkMode?: boolean;
}

export const comcastObj: IJobDetailsProps = {
    topLeft: {
        imgSrc: "reactIcon",
        label: "React",
    },
    topRight: {
        imgSrc: "typescriptIcon",
        label: "TypeScript",
    },
    bottomLeft: {
        imgSrc: "nodejsIcon",
        label: "NodeJS",
    },
    bottomRight: {
        imgSrc: "mongodbIcon",
        label: "MongoDB",
    },
};

export const fsaObj: IJobDetailsProps = {
    topLeft: {
        imgSrc: "reactIcon",
        label: "React",
    },
    topRight: {
        imgSrc: "javascriptIcon",
        label: "JavaScript",
    },
    bottomLeft: {
        imgSrc: "nodejsIcon",
        label: "NodeJS",
    },
    bottomRight: {
        imgSrc: "expressIcon",
        label: "ExpressJS",
    },
};

export const bloombergObj: IJobDetailsProps = {
    topLeft: {
        imgSrc: "javascriptIcon",
        label: "Javascript",
    },
    topRight: {
        imgSrc: "htmlIcon",
        label: "HTML5",
    },
    bottomLeft: {
        imgSrc: "cssIcon",
        label: "CSS3",
    },
    bottomRight: {
        imgSrc: "pythonIcon",
        label: "Python",
    },
};

export const sigObj: IJobDetailsProps = {
    topLeft: {
        imgSrc: "bashIcon",
        label: "Bash",
    },
    topRight: {
        imgSrc: "confluenceIcon",
        label: "confluence",
    },
    bottomLeft: {
        imgSrc: "jiraIcon",
        label: "Jira",
    },
    bottomRight: {
        imgSrc: "markdownIcon",
        label: "Markdown",
    },
};

type IDarkModeMap = Record<IconNames, IconNames>;

export const darkModeMap: IDarkModeMap = {
    bashIcon: "bashIconDark",
    cssIcon: "cssIconDark",
    htmlIcon: "htmlIconDark",
    javascriptIcon: "javascriptIconDark",
    typescriptIcon: "typescriptIconDark",
    nodejsIcon: "nodejsIcon",
    reactIcon: "reactIcon",
    confluenceIcon: "confluenceIcon",
    expressIcon: "expressIcon",
    jiraIcon: "jiraIcon",
    markdownIcon: "markdownIcon",
    mongodbIcon: "mongodbIcon",
    pythonIcon: "pythonIcon",
    bashIconDark: "bashIconDark",
    cssIconDark: "cssIconDark",
    javascriptIconDark: "javascriptIconDark",
    typescriptIconDark: "typescriptIconDark",
    htmlIconDark: "htmlIconDark",
};
