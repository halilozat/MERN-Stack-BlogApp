import React, { useState } from 'react'
import ReactFileBase64 from 'react-file-base64'

import { Form, Button } from 'react-bootstrap'

//*as = herşeyi import et
import * as api from '../axios/index.js'


const SubmitMemory = () => {
    const [memoryData, setMemoryData] = useState({
        title: '',
        content: '',
        creator: '',
        image: '',
    })

    return (
        <>
            <Form
                onSubmit={(e) => {
                    e.preventDefault() //butona basınca sayfanın kendini yenilemesini engeller

                    api.createMemory(memoryData)
                }}
            >
                <Form.Group >
                    <h1>Bir Yazı Yarat</h1>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Başlık</Form.Label>
                    <Form.Control
                        name='title'
                        type='text'
                        onChange={(e) =>
                            //...memoryData = memoryData'yı değiştirmeden şu anki state'i neyse al.
                            //title: e.target.value = kullanıcının yazdığı değeri al, title olarak set et.
                            setMemoryData({ ...memoryData, title: e.target.value })
                        }>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Yazar</Form.Label>
                    <Form.Control
                        name='author'
                        type='text'
                        onChange={(e) =>
                            setMemoryData({ ...memoryData, creator: e.target.value })
                        }
                    ></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>İçerik</Form.Label>
                    <Form.Control
                        name='content'
                        type='text'
                        as='textarea'
                        rows={3}
                        onChange={(e) =>
                            setMemoryData({ ...memoryData, content: e.target.value })
                        }
                    ></Form.Control>
                </Form.Group>

                <Form.Group >
                    <br />
                    <ReactFileBase64
                        type='file'
                        multiple={false}
                        onDone={({ base64 }) => {
                            setMemoryData({ ...memoryData, image: base64 })
                        }}
                    />
                </Form.Group>
                <br />
                <Button type='submit' block>
                    Bir Yazı Yarat
        </Button>
            </Form>
        </>
    )
}

export default SubmitMemory