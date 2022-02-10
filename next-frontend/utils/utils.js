import { getContactData } from './api';

export function checkValidURL(url) {
    if(url === null || url === '' || url === undefined) {
        return '';
    }
    else {
        if (
            url !== null &&
            !(url.startsWith('https://') || url.startsWith('http://'))
        ) {
            return url[0] === '/' ? url : '/' + url;
        } else if (
            url !== null &&
            (url.startsWith('https://') || url.startsWith('http://'))
        ) {
            return url;
        }
        return '/';
    }
}


export async function checkForLayoutComponent(content) {
    const layoutComponent = content.filter((section) =>
        section.__typename.startsWith('ComponentLayout')
    );

    let specialLayout = [];

    if (layoutComponent.length > 0) {
        specialLayout = layoutComponent.map(async (layout) => {
            if (layout.__typename === 'ComponentLayoutContactUs') {
                const data = await getContactData();
                return { __typename: layout.__typename, data };
            }
        });
    }

    // console.log(specialLayout);

    return {};
}
