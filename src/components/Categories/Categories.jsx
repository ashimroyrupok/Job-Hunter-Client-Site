import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const Categories = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Web Development</Tab>
                <Tab>Digital Marketing</Tab>
                <Tab>Graphics Design</Tab>
            </TabList>

            <TabPanel>
                <p>
                    <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
                        /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
                    game franchise, owned by Nintendo and created by Japanese video game designer
                    Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
                    of the series, Mario has appeared in over 200 video games since his creation.
                    Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
                    Kingdom, his adventures generally center upon rescuing Princess Peach from the
                    Koopa villain Bowser. His younger brother and sidekick is Luigi.
                </p>
                <p>
                    Source:{' '}
                    <a href="https://en.wikipedia.org/wiki/Mario" rel="noreferrer" target="_blank">
                        Wikipedia
                    </a>
                </p>
            </TabPanel>
        </Tabs>
    )
}

//   render(Categories);

export default Categories;