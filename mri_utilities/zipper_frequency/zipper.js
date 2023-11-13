	var cf = document.getElementById("cf")
	var fov = document.getElementById("fov")
	var zipper = document.getElementById("zipper")
	var position = document.getElementById("position")
 
	function sar() {
                        var cfValue = Number(cf.value)
                        var fovValue = Number(fov.value)
                        var positionValue = position.value
                        var offset = Math.round((positionValue/fovValue) * 1600) 
                        var zipperLoc = Number(cfValue + offset)
  
                                zipper.innerHTML = zipperLoc
                        }

	function lip() {
                        var cfValue = Number(cf.value)
                        var fovValue = Number(fov.value)
                        var positionValue = position.value
                        var offset = Math.round((positionValue/fovValue) * 1600) 
                        var zipperLoc = Number(cfValue - offset)
  
                                zipper.innerHTML = zipperLoc
                        }