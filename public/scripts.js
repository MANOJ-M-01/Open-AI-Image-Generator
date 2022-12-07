'use strict'

const Form = document.querySelector('form')

Form.addEventListener('submit', (event) => {
    event.preventDefault()
    const Input = document.querySelector('input')
    const Select = document.querySelector('select')
    if (!Input.value || !Select.value) return
    let Request = {
        prompt: Input.value,
        size: Select.value
    }

    const PreviewContainer = document.querySelector('.preview-container')
    const ImageElement = document.createElement('img')
    const SubmissionContainer = document.querySelector('.submission-container')

    SubmissionContainer.classList.add('is-loading')
    getData(Request)
        .then(res => {
            PreviewContainer.innerHTML = ''
            ImageElement.src = res.data
            PreviewContainer.appendChild(ImageElement)
        })
        .catch(err => {
            console.log('Error ', err)
        })
        .finally(() => {
            SubmissionContainer.classList.remove('is-loading')
        })
})


const getData = async (Request) => {
    let res = await fetch('/openai/generate-image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Request)
    })
    return res.json()
}