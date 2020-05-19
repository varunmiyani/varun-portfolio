import React from 'react'

function ContentList(props) {
    const li = props.data.map(data => <li>{data}</li>)
    return (
        <div className="row">
            <div className="col-lg-12">
                <ul>
                    {li}
                </ul>
            </div>
        </div>
    )
}

export default ContentList
