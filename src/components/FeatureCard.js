import React from "react"
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';


const FeatureCard = ({ style, title, subtitle, text, button, click, src, alt }) => {
    return (
        <Card
            style={{
                maxWidth: '500px',
                margin: '2rem auto',
                ...style,
            }}
        >
            {src && <img
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',

                }}
                alt={alt}
                src={src}
            />}
            <CardBody style={{
                padding: '3rem',
                backgroundColor: '#ccc',
            }}>
                <CardTitle tag="h5" style={{
                    color: '#56331C',
                    fontSize: '2rem',
                    marginBottom: '1rem',
                }}>
                    {title}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    style={{
                        fontSize: '1.5rem'
                    }}
                >
                    {subtitle}
                </CardSubtitle>
                <CardText style={{
                    margin: '2rem',
                    fontSize: '1.2rem',
                }} dangerouslySetInnerHTML={{ __html: text }} />
                {button && <Button onClick={click}>
                    {button}
                </Button>}
            </CardBody>
        </Card>
    )
}

export default FeatureCard