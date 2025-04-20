import React from 'react';
import { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client';



const CreatePost = (event) => {
    const [post, setPost] = useState({name: "", speed: "", color: []})
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    const createPost = async (event) => {
        
        event.preventDefault();
    
        await supabase
        .from('Crewmates')
        .insert({name: post.name, speed: post.speed, color: post.color})
        .select();
    
        window.location = "/";
  }
    
    return (
        <div>
            <form>
                <label for="name">name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label for="speed">speed</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange} /><br />
                <br/>

                <label for="color">color</label><br />
                {["Red", "Blue", "Green", "Yellow"].map((clr) => (
                    <label key={clr} style={{ display: "flex", alignItems: "center", marginBottom: "5px", gap: "8px" }}>
                        <input
                        type="radio" // ← change to radio in step 2
                        name="color"
                        value={clr}
                        checked={post.color === clr}
                        onChange={(e) => setPost((prev) => ({ ...prev, color: e.target.value }))}
                        />
                        <span>{clr}</span>
                    </label>
                    ))}
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost;