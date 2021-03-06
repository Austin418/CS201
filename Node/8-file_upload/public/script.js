const url = '/api/v1/products'
const fileFormDOM = document.querySelector('.file-form')

const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const imageInput = document.querySelector('#image')
const fileForm = document.querySelector(".file-form")

const container = document.querySelector('.container')
let imageValue

fileForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const nameValue = nameInput.value
  const priceValue = priceInput.value
  try{
    const product = {name: nameValue, price: priceValue, image: imageValue}

    await axios.post(url, product)
    fetchProducts()
  }catch(err) {
    console.log(err);
  }
})

imageInput.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0]

  console.log(imageFile);
  const formData = new FormData()
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

fetchProducts()