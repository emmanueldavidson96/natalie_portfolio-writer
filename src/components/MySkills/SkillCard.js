import React from 'react'

export default function SkillCard({skill, percentage, skillImg}) {
  return (
    <div 
        style={{position:"relative", width:"100%", backgroundColor:"#171717", padding:"35px", borderRadius:"10px", flexDirection:"column", alignItems:"center", justifyContent:"end", height:"150px", display:"flex", gap:"20px", }}
    >
        <div style={{
            position:"absolute",
            height:"65px",
            width:"65px",
            borderRadius:"4px",
            top:"-20px",
            left:"40px",
            backgroundColor:"#292929" ,
            display:"flex",
            alignItems:"center",
            justifyContent:"center"                  
        }}>
            <img 
                src={skillImg}
                style={{
                    width:"40px",
                    height:"40px"
                }}
            />
        </div>
        <h4 
            style={{width:"100%", textTransform:"uppercase", fontSize:"14px",color:"white", display:"flex", justifyContent:"space-between"}}
        >
            {skill} 
            <span>{percentage}%</span>
        </h4>
        
        <div 
            style={{
                width:"100%",
                backgroundColor:"gray",
                borderRadius:"12px",
                height:"12px",
            }}
        >
            <div 
                style={{
                    height:"100%",
                    width:`${percentage}%`,
                    backgroundColor:"#adff2f",
                    borderRadius:"12px"
                }}
            >
            </div>
        </div>
    </div>
  )
}
