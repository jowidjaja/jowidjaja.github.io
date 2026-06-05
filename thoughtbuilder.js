const fs = require("fs");
const path = require("path");

const matter = require("gray-matter");
const { marked } = require("marked");

const POSTS_DIR = "./thoughts";

const files =
    fs.readdirSync(POSTS_DIR);

const thoughts =
    files
    .filter(
        file =>
        file.endsWith(".md")
    )
    .map(file => {

        const raw =
            fs.readFileSync(
                path.join(
                    POSTS_DIR,
                    file
                ),
                "utf8"
            );

        const {
            data,
            content
        } = matter(raw);

        return {

            title:
                data.title,

            date:
                data.date,

            category:
                data.category,

            thumbnail:
                data.thumbnail,

            tags:
                data.tags || [],

            published:
                data.published ?? true,

            slug:
                file.replace(
                    ".md",
                    ""
                ),

            preview:
                content
                .replace(/\n/g, " ")
                .slice(0, 180)
                + "...",

            content:
                marked.parse(
                    content
                )
        };
    })
    .filter(
        thought =>
        thought.published
    )
    .sort(
        (a,b) =>
        new Date(b.date)
        -
        new Date(a.date)
    );

fs.writeFileSync(
    "thoughts.json",
    JSON.stringify(
        thoughts,
        null,
        2
    )
);

console.log(
    `Built ${thoughts.length} thoughts`
);