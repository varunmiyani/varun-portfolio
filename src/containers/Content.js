import React from 'react'
import Title from '../components/Title/Title'
import ContentList from '../components/ContentList/ContentList'
import Rating from '../components/Rating/Rating'
import jsonData from '../data/profile.json'

function Content() {

    const data = jsonData.data
    const contents = data.map(section => {
        
        let contentList = null
        if(section.type === 'list') {
            contentList = <ContentList data={section.data} />
        } else if(section.type === 'rating') {
            contentList = <Rating data={section.data} />
        }

        return (
            <div className="section">
                <Title title={section.title} />
                {contentList}
                <hr />
            </div>
        )
    })

    return (
        <React.Fragment>
            {contents}
        </React.Fragment>
    )
}

export default Content
