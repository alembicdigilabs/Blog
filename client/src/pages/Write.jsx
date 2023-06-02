import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='write'>
      <div className="container">
        <h2 className='page_title'>Create Post</h2>
        <form action="#"  enctype="multipart/form-data">
          <div className="row">

            <div className="col-md-8">

              <div class="mb-3">
                <label for="post_title" class="form-label">Post Title</label>
                <input type="text" class="form-control" id="post_title" name='post_title' placeholder="" />
              </div>
              <div class="mb-3">
                <label for="post_body" class="form-label">Post Body</label>
                <textarea class="form-control" id="post_body" rows="10" name='post_body' value={value} style={{display:'none'}} ></textarea>
                <ReactQuill theme="snow" value={value} onChange={setValue} />
              </div>

            </div>
            <div className="col-md-4">
            <div class="mb-3">
              <label for="post_image" class="form-label">Post Thumbnail</label>
              <input class="form-control" type="file" id="post_image" name='post_image'/>
            </div>
                <div class="mb-3">
                  <label for="post_category" class="form-label">Select Category</label>
                  <select name="post_category" id="post_category" className='form-control'>
                    <option value="">Select Option </option>
                    <option value="Technology">Technology </option>
                    <option value="Science">Science</option>
                    <option value="Artist">Artist</option>
                    <option value="Design">Design</option>
                  </select> 
                </div>
                <div className="mb-3">
                  <button  className='btn btn-block btn-info' >Save As Draft</button>
                  <input type="submit" className='btn btn-block btn-primary' value="Sumbit"/>


                </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
export default Write;
