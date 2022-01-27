import { gql } from '@apollo/client';

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
                                text
                                url
                            }
                            button2 {
                                text
                                url
                            }
                            isContentOnRight
                        }
                        ... on ComponentSectionsPageBanner {
                            title
                            banner_image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                        ... on ComponentSectionsUspBanner {
                            block {
                                icon
                                name
                                description
                            }
                            offsetPos
                        }
                        ... on ComponentSectionsTextBlock {
                            heading
                            headingType
                            description
                            isDarkBackground
                        }
                        ... on ComponentSectionsOurPrograms {
                            programs {
                                data {
                                    id
                                    attributes {
                                        name
                                        age_range
                                        level
                                        description
                                        slug
                                        coverImage {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        tags(sort: "name") {
                                            data {
                                                attributes {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
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
                                text
                                url
                            }
                            button2 {
                                text
                                url
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
                        }
                        ... on ComponentSectionsPeopleHighlightBlock {
                            heading
                            description
                            isMobileSlider
                            people {
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
                        }
                        ... on ComponentSectionsStatisticBlock {
                            heading
                            description
                            data {
                                dataName
                                number
                            }
                            isDarkBackground
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
                                text
                                url
                            }
                            imageOnRight
                            verticalAlign
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
                        }
                        ... on ComponentSectionsIconTextTile {
                            tiles {
                                icon
                                heading
                                description
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
                    Navigation {
                        __typename
                        ... on ComponentElementsLinkDropdown {
                            displayName
                            url
                            links {
                                url
                                displayName
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
                                    }
                                }
                            }
                            url
                            isExternalLink
                        }
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
                    footer_Menu {
                        __typename
                        ... on ComponentElementsLinkDropdown {
                            displayName
                            url
                            links {
                                url
                                displayName
                            }
                        }
                        ... on ComponentElementsLink {
                            displayName
                            page {
                                data {
                                    attributes {
                                        shortName
                                        slug
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
                    coverImage {
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
                                text
                                url
                            }
                            button2 {
                                text
                                url
                            }
                            isContentOnRight
                        }
                        ... on ComponentSectionsPageBanner {
                            title
                            banner_image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                        ... on ComponentSectionsUspBanner {
                            block {
                                icon
                                name
                                description
                            }
                            offsetPos
                        }
                        ... on ComponentSectionsTextBlock {
                            heading
                            headingType
                            description
                            isDarkBackground
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
                                        age_range
                                        level
                                        description
                                        slug
                                        coverImage {
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
                                text
                                url
                            }
                            button2 {
                                text
                                url
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
                        }
                        ... on ComponentSectionsPeopleHighlightBlock {
                            heading
                            description
                            isMobileSlider
                            people {
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
                        }
                        ... on ComponentSectionsStatisticBlock {
                            heading
                            description
                            data {
                                dataName
                                number
                            }
                            isDarkBackground
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
                                text
                                url
                            }
                            imageOnRight
                            verticalAlign
                            wrapperOptions {
                                bgcolor
                                spaceBtm
                                spaceTop
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
                        }
                        ... on ComponentSectionsIconTextTile {
                            tiles {
                                icon
                                heading
                                description
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
                        }
                        ... on ComponentSectionsTextTileRowBlock {
                            offsetPos
                            tiles {
                                heading
                                description
                            }
                        }
                        ... on ComponentSectionsBlogLists {
                            heading
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
