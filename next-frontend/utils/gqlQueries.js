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
                        }
                        ... on ComponentSectionsTextBlock {
                            heading
                            headingType
                            description
                        }
                        ... on ComponentSectionsOurPrograms {
                            programs {
                                data {
                                    id
                                    attributes {
                                        program_name
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
                                        mobile
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
                                        mobile
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
                            button1 {
                                text
                                url
                            }
                            button2 {
                                text
                                url
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
                            questionBlocks {
                                question
                                answer
                            }
                        }
                        ... on ComponentSectionsPeopleHighlightBlock {
                            people {
                                data {
                                    attributes {
                                        name
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
                        }
                        ... on ComponentSectionsTextImageBlock {
                            heading
                            subHeading
                            text
                            Image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            imageOnRight
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
