import {addPost,deletePost} from '@/lib/actions'

const ServerActions = () => {
    const actionInCompoenent=async()=>{
        'use server';
    }
  return (
    <div>
      <form action={addPost}>
      <input type='text' placeholder='enter title' name='title'/>
      <input type='text' placeholder='enter description' name='desc'/>
      <input type='text' placeholder='enter slug' name='slug'/>
      <input type='text' placeholder='enter Userid' name='userId'/>
        <button>Create</button>
      </form>
      <form action={deletePost}>
      <input type='text' placeholder='enter POST ID to delete' name='id'/>
      <button>Delete</button>
      </form>
    </div>
  )
}

export default ServerActions
