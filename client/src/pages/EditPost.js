import React from 'react';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'
import './EditPost.css'

const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crewmates')
          .update({ name: post.name, speed: post.speed,  color: post.color})
          .eq('id', id);
      
        window.location = "/";
      }

    const deletePost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Crewmates')
          .delete()
          .eq('id', id); 
      
        window.location = "http://localhost:3000/";
      }

    return (
        <div>
            <form>
                <label for="name">name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label for="speed">speed</label><br />
                <input type="text" id="speed" name="speed" value={post.speed} onChange={handleChange} /><br />
                <br/>

                <label for="color">color</label><br />
                {["Red", "Blue", "Green", "Yellow"].map((clr) => (
                    <label key={clr} style={{ display: "flex", alignItems: "center", marginBottom: "5px", gap: "8px" }}>
                        <input
                        type="radio" 
                        name="color"
                        value={clr}
                        checked={post.color === clr}
                        onChange={(e) => setPost((prev) => ({ ...prev, color: e.target.value }))}
                        />
                        <span>{clr}</span>
                    </label>
                    ))}
                    
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost