import { gql } from '@apollo/client';

export const PAGE_PATHS = gql`
    query pagesPaths {
        pages(pagination: { pageSize: 30 }) {
            data {
                attributes {
                    slug
                    parent {
                        data {
                            attributes {
                                slug
                            }
                        }
                    }
                    children {
                        data {
                            attributes {
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const PAGE_DATA = gql`
    query Pages($slug: String!) {
        pages(filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    seo {
                        title
                        description
                        keywords
                        robots
                    }
                    content {
                        __typename
                        ... on ComponentSectionsHero {
                            heading
                            bgImageDesktop {
                                data {
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            bgImageMobile {
                                data {
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            button1 {
                                displayName
                                isExternalLink
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                url
                            }
                            button2 {
                                displayName
                                isExternalLink
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                url
                            }
                            isContentOnRight
                        }
                        ... on ComponentSectionsPageBanner {
                            title
                            bgDesktop {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            bgMobile {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsUspBanner {
                            block {
                                icon
                                name
                                description
                            }
                            offsetPos
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTextBlock {
                            heading
                            headingType
                            description
                            isDarkBackground
                            maxWidth
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsOurPrograms {
                            programs {
                                data {
                                    id
                                    attributes {
                                        name
                                        description
                                        slug
                                        listingThumbnail {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        tags(sort: "name:desc") {
                                            data {
                                                attributes {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsBlockContent {
                            gridItemOne {
                                __typename
                                heading
                                paragraph
                                backgroundColor
                                isLightText
                                isDoubleSize
                                buttonText
                                buttonLink
                            }
                            gridItemsImages {
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            gridItemTwo {
                                description
                                bgColor
                                isLightText
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsGridAboutUs {
                            gridItemOne {
                                __typename
                                heading
                                paragraph
                                backgroundColor
                                isLightText
                                isDoubleSize
                                buttonText
                                buttonLink
                            }
                            gridImageOne {
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            gridItemTwo {
                                __typename
                                heading
                                paragraph
                                backgroundColor
                                isLightText
                                isDoubleSize
                                buttonText
                                buttonLink
                            }
                            gridImageTwo {
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            gridItemThree {
                                __typename
                                heading
                                paragraph
                                backgroundColor
                                isLightText
                                isDoubleSize
                                buttonText
                                buttonLink
                            }
                            gridImageThree {
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTestimonials {
                            authorName
                            authorRole
                            avatar {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            quote
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsSponsors {
                            goldSponsors: sponsors(
                                filters: { level: { eq: "gold" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        level
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            silverSponsors: sponsors(
                                filters: { level: { eq: "silver" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            bronzeSponsors: sponsors(
                                filters: { level: { eq: "bronze" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            button1 {
                                displayName
                                isExternalLink
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                url
                            }
                            button2 {
                                displayName
                                isExternalLink
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                url
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsSponsorsDetails {
                            goldSponsors: sponsors(
                                filters: { level: { eq: "gold" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        level
                                        phone
                                        email
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        social {
                                            platform
                                            linkTo
                                        }
                                    }
                                }
                            }
                            silverSponsors: sponsors(
                                filters: { level: { eq: "silver" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        phone
                                        email
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            bronzeSponsors: sponsors(
                                filters: { level: { eq: "bronze" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsRegisterInterest {
                            heading
                            paragraph
                            leftImage {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                        ... on ComponentSectionsFaq {
                            faqlists: questionBlocks {
                                question
                                answer
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsPeopleHighlightBlock {
                            heading
                            description
                            isMobileSlider
                            people(pagination: { pageSize: 20 }) {
                                data {
                                    attributes {
                                        name
                                        title
                                        bio
                                        profile_picture {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        coaches {
                                            data {
                                                attributes {
                                                    name
                                                    description
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            ctaButton {
                                displayName
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                isExternalLink
                                url
                                variation
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsStatisticBlock {
                            heading
                            description
                            data {
                                dataName
                                number
                            }
                            isDarkBackground
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTextImageBlock {
                            preHeading
                            heading
                            text
                            image {
                                data {
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            button {
                                displayName
                                isExternalLink
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                url
                            }
                            imageOnRight
                            verticalAlign
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsIconTextLinkGroup {
                            items {
                                icon
                                heading
                                content
                                linkText
                                linkTo
                            }
                            isDarkBackground
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsIconTextTile {
                            tiles {
                                icon
                                heading
                                description
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsBanner {
                            image {
                                data {
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            icon {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            heading
                            description
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTimelineBlock {
                            timelineEvents {
                                date
                                description
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsBlogLists {
                            heading
                        }
                    }
                }
            }
        }
    }
`;

export const CHILD_PAGES = gql`
    query childrenPage($slug: String!) {
        pages(filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    shortName
                    slug
                    children {
                        data {
                            attributes {
                                shortName
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const LAYOUT_DATA = gql`
    query GetLayoutData {
        header {
            data {
                attributes {
                    announcement
                    logo {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    navigation {
                        __typename
                        ... on ComponentElementsLinkDropdown {
                            displayName
                            url
                            links {
                                displayName
                                page {
                                    data {
                                        attributes {
                                            shortName
                                            url
                                            slug
                                        }
                                    }
                                }
                                url
                                isExternalLink
                            }
                        }
                        ... on ComponentElementsProgramsDropdown {
                            displayName
                            programs {
                                data {
                                    attributes {
                                        name
                                        slug
                                    }
                                }
                            }
                        }
                        ... on ComponentElementsLink {
                            displayName
                            page {
                                data {
                                    attributes {
                                        shortName
                                        slug
                                        url
                                    }
                                }
                            }
                            url
                            isExternalLink
                        }
                    }
                    buttons {
                        displayName
                        variation
                        page {
                            data {
                                attributes {
                                    slug
                                }
                            }
                        }
                        url
                        isExternalLink
                    }
                }
            }
        }
        footer {
            data {
                attributes {
                    logo {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    name
                    message
                    email
                    social {
                        platform
                        linkTo
                    }
                    footerMenu {
                        __typename
                        ... on ComponentElementsLinkDropdown {
                            displayName
                            url
                            links {
                                displayName
                                page {
                                    data {
                                        attributes {
                                            shortName
                                            slug
                                            url
                                        }
                                    }
                                }
                                url
                                isExternalLink
                            }
                        }
                        ... on ComponentElementsProgramsDropdown {
                            displayName
                            programs {
                                data {
                                    attributes {
                                        name
                                        slug
                                    }
                                }
                            }
                        }
                        ... on ComponentElementsLink {
                            displayName
                            page {
                                data {
                                    attributes {
                                        shortName
                                        slug
                                        url
                                    }
                                }
                            }
                            url
                            isExternalLink
                        }
                    }
                    copyrightInfo
                }
            }
        }
    }
`;

export const PROGRAMS_PATHS = gql`
    query ProgramsPath {
        programs {
            data {
                attributes {
                    slug
                }
            }
        }
    }
`;

export const PROGRAMS_DATA = gql`
    query Programs($slug: String!) {
        programs(filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    slug
                    name
                    description
                    bgDesktop {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    bgMobile {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    listingThumbnail {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    coaches {
                        data {
                            attributes {
                                name
                                title
                                bio
                                profile_picture {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                coaches {
                                    data {
                                        attributes {
                                            name
                                            description
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ctaButton {
                        displayName
                        page {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                        isExternalLink
                        url
                    }
                    content {
                        __typename
                        ... on ComponentSectionsHero {
                            heading
                            bgImageDesktop {
                                data {
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            bgImageMobile {
                                data {
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            button1 {
                                displayName
                                url
                            }
                            button2 {
                                displayName
                                url
                            }
                            isContentOnRight
                        }
                        ... on ComponentSectionsPageBanner {
                            title
                            bgDesktop {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            bgMobile {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsUspBanner {
                            block {
                                icon
                                name
                                description
                            }
                            offsetPos
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTextBlock {
                            heading
                            headingType
                            description
                            isDarkBackground
                            maxWidth
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsOurPrograms {
                            programs {
                                data {
                                    id
                                    attributes {
                                        name
                                        description
                                        slug
                                        listingThumbnail {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        tags(sort: "name:desc") {
                                            data {
                                                attributes {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsBlockContent {
                            gridItemOne {
                                __typename
                                heading
                                paragraph
                                backgroundColor
                                isLightText
                                isDoubleSize
                                buttonText
                                buttonLink
                            }
                            gridItemsImages {
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            gridItemTwo {
                                description
                                bgColor
                                isLightText
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsGridAboutUs {
                            gridItemOne {
                                __typename
                                heading
                                paragraph
                                backgroundColor
                                isLightText
                                isDoubleSize
                                buttonText
                                buttonLink
                            }
                            gridImageOne {
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            gridItemTwo {
                                __typename
                                heading
                                paragraph
                                backgroundColor
                                isLightText
                                isDoubleSize
                                buttonText
                                buttonLink
                            }
                            gridImageTwo {
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            gridItemThree {
                                __typename
                                heading
                                paragraph
                                backgroundColor
                                isLightText
                                isDoubleSize
                                buttonText
                                buttonLink
                            }
                            gridImageThree {
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTestimonials {
                            authorName
                            authorRole
                            avatar {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            quote
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsSponsors {
                            goldSponsors: sponsors(
                                filters: { level: { eq: "gold" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        level
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            silverSponsors: sponsors(
                                filters: { level: { eq: "silver" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            bronzeSponsors: sponsors(
                                filters: { level: { eq: "bronze" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            button1 {
                                displayName
                                isExternalLink
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                url
                            }
                            button2 {
                                displayName
                                isExternalLink
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                url
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsSponsorsDetails {
                            goldSponsors: sponsors(
                                filters: { level: { eq: "gold" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        level
                                        phone
                                        email
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        social {
                                            platform
                                            linkTo
                                        }
                                    }
                                }
                            }
                            silverSponsors: sponsors(
                                filters: { level: { eq: "silver" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        phone
                                        email
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            bronzeSponsors: sponsors(
                                filters: { level: { eq: "bronze" } }
                            ) {
                                data {
                                    attributes {
                                        name
                                        website
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsRegisterInterest {
                            heading
                            paragraph
                            leftImage {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                        ... on ComponentSectionsFaq {
                            faqlists: questionBlocks {
                                question
                                answer
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsPeopleHighlightBlock {
                            heading
                            description
                            isMobileSlider
                            people(pagination: { pageSize: 20 }) {
                                data {
                                    attributes {
                                        name
                                        title
                                        bio
                                        profile_picture {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        coaches {
                                            data {
                                                attributes {
                                                    name
                                                    description
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            ctaButton {
                                displayName
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                isExternalLink
                                url
                                variation
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsStatisticBlock {
                            heading
                            description
                            data {
                                dataName
                                number
                            }
                            isDarkBackground
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTextImageBlock {
                            preHeading
                            heading
                            text
                            image {
                                data {
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            button {
                                displayName
                                isExternalLink
                                page {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                url
                            }
                            imageOnRight
                            verticalAlign
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsIconTextLinkGroup {
                            items {
                                icon
                                heading
                                content
                                linkText
                                linkTo
                            }
                            isDarkBackground
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsIconTextTile {
                            tiles {
                                icon
                                heading
                                description
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsBanner {
                            image {
                                data {
                                    attributes {
                                        url
                                        width
                                        height
                                    }
                                }
                            }
                            icon {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            heading
                            description
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTimelineBlock {
                            timelineEvents {
                                date
                                description
                                image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                        ... on ComponentSectionsTextTileRowBlock {
                            tiles {
                                heading
                                description
                            }
                            offsetPos
                            wrapperOptions {
                                bgcolor
                                spaceTop
                                spaceBtm
                                isTwoColumns
                            }
                        }
                    }
                    venue {
                        venue
                        venueMapLink
                        venueDescription
                    }
                    schedule {
                        schedule
                        startDate
                        endDate
                    }
                    disclamer
                    faq {
                        faqlists: questionBlocks {
                            question
                            answer
                        }
                        wrapperOptions {
                            bgcolor
                            spaceTop
                            spaceBtm
                            isTwoColumns
                        }
                    }
                }
            }
        }
    }
`;

export const BLOGS_DATA = gql`
    query getAllBlogs {
        blogs(sort: "createdAt:desc") {
            data {
                attributes {
                    slug
                    cover_Image {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    author {
                        data {
                            attributes {
                                username
                            }
                        }
                    }
                    title
                    shortDescription
                    content
                    createdAt
                }
            }
        }
    }
`;

export const BLOGS_PATHS = gql`
    query blogsPath {
        blogs {
            data {
                attributes {
                    title
                    slug
                }
            }
        }
    }
`;

export const ONE_BLOG_DATA = gql`
    query ($slug: String!) {
        blogs(filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    cover_Image {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    title
                    slug
                    shortDescription
                    content
                    author {
                        data {
                            attributes {
                                username
                            }
                        }
                    }
                    createdAt
                }
            }
        }
    }
`;

export const THREE_LATEST_BLOGS = gql`
    query latestThreePosts {
        blogs(sort: "createdAt:desc", pagination: { start: 0, limit: 3 }) {
            data {
                attributes {
                    slug
                    cover_Image {
                        data {
                            attributes {
                                url
                                width
                                height
                            }
                        }
                    }
                    author {
                        data {
                            attributes {
                                username
                            }
                        }
                    }
                    title
                    shortDescription
                    content
                    createdAt
                }
            }
        }
    }
`;

export const CONTACT_INFORMATION = gql`
    query contactInformation {
        contactInformation {
            data {
                attributes {
                    contactList {
                        contactName
                        email
                        phoneNumber
                    }
                    socialMediaList {
                        platform
                        linkTo
                    }
                    addressLocationName
                    fullAddress
                    addressLocationDescription
                }
            }
        }
    }
`;
