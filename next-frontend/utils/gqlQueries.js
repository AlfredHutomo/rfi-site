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
                            banner_text
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
                            links {
                                url
                                displayName
                            }
                        }
                    }
                }
            }
        }
        footer {
            data {
                attributes {
                    message
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
                            banner_text
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
