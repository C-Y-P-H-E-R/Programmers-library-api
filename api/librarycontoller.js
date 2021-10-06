const sendListOfBooks = (req,res) => {
    res.json({
        status: 200,
        links: {
            "c++" : ["https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md", 
                "https://ptgmedia.pearsoncmg.com/images/0131240722/downloads/blanchette_book.pdf"
                ],
            "Java" : ["https://math.hws.edu/javanotes/",
                "https://web.archive.org/web/20190302130416/http://dept.cs.williams.edu/~bailey/JavaStructures/Book_files/JavaStructures.pdf"
                ],
            "Javascript" : ["https://media.wiley.com/product_ancillary/28/07645334/DOWNLOAD/all.pdf", 
                "https://2ality.com/2013/06/basic-javascript.html"
                ]
        }
    })
}

module.exports = sendListOfBooks;