const url = '/api/v1/products'
const fileFormDOM = document.querySelector('.file-form')

const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const imageInput = document.querySelector('#image')

const container = document.querySelector('.container')
let imageValue

imageInput.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0]
  const formData = new FormData()

  console.log(imageFile);
  const formData = new FormData()
  formData = new FormData()
  formData.append('image', imageFile)
  try{
    const {
      data:{
        image: {
          src
        }
      }
    }= await axios.post(`${url}/uploads`, formData, {
      headers:{
        "content-type": "multipart/form-data"
      }
    })
  }catch (err){
    console.log(err);
  }
})