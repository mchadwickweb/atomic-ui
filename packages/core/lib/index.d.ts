/// <reference types="react" />
declare module "elements/src/Heading/index" {
    import React from "react";
    import "./Heading.css";
    export interface HeadingProps {
        children: React.ReactNode;
        as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
        align?: "left" | "center" | "right";
    }
    export function Heading({ children, as, align }: HeadingProps): JSX.Element;
}
declare module "elements/src/Text/index" {
    import React from "react";
    import "./Text.css";
    export interface TextProps {
        children: React.ReactNode;
        align?: "left" | "center" | "right";
    }
    export function Text({ children, align }: TextProps): JSX.Element;
}
declare module "elements/src/List" {
    import React from "react";
    export interface ListItemProps {
        children: React.ReactNode;
    }
    export function ListItem({ children }: ListItemProps): JSX.Element;
    export interface ListProps {
        children: React.ReactNode;
        as: string;
    }
    export function List({ as, children }: ListProps): JSX.Element;
}
declare module "elements/src/Divider" {
    export function Divider(): JSX.Element;
}
declare module "elements/src/Blockquote" {
    import React from "react";
    export interface BlockquoteProps {
        children: React.ReactNode;
        cite?: string;
    }
    export function Blockquote({ children, cite }: BlockquoteProps): JSX.Element;
}
declare module "elements/src/Link" {
    import React from "react";
    export interface LinkProps {
        children: React.ReactNode;
        href: string;
        as: "link" | "button";
    }
    export function Link({ children, href, as }: LinkProps): JSX.Element;
}
declare module "components/src/TextField/index" {
    import { AllHTMLAttributes } from "react";
    type InputElementProps = AllHTMLAttributes<HTMLInputElement>;
    const validInputTypes: {
        text: string;
        password: string;
        email: string;
        search: string;
        number: string;
        tel: string;
        url: string;
    };
    export interface TextFieldProps {
        id: InputElementProps["id"];
        name: InputElementProps["name"];
        type: keyof typeof validInputTypes;
        value?: InputElementProps["value"];
        labelText: string;
        hint?: string;
        errorMessage?: string;
        autoComplete?: InputElementProps["autoComplete"];
    }
    export function TextField({ id, name, type, value, labelText, hint, errorMessage, autoComplete, }: TextFieldProps): JSX.Element;
}
declare module "structure/src/Section/index" {
    import React from "react";
    import "./Section.css";
    export interface SectionProps {
        children: React.ReactNode;
        name: string;
        contain?: boolean;
    }
    export function Section({ children, name, contain }: SectionProps): JSX.Element;
}
declare module "index" {
    export * from "elements/src/Heading/index";
    export * from "elements/src/Text/index";
    export * from "elements/src/List";
    export * from "elements/src/Divider";
    export * from "elements/src/Blockquote";
    export * from "elements/src/Link";
    export * from "components/src/TextField/index";
    export * from "structure/src/Section/index";
}
