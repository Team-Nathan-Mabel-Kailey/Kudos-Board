import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className='header-content'>
                <Link to={`/`} >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfUlEQVR4nO1Za2xURRS+NCDyQ+qC3TmzfRlSE1pA1EZKaHdm0VLUgEGiQg1pIP4ilTbRBKKtqcRS2gTcLSQSH4iRmJhgtGBFEh8lAUr3diOPmBgqRom2RvkBsRXvBZox53b37t3d++rS3dakXzJpO3fmnO/MOXPmzFSSpjGNaWQEXh97mlDWT4CrQLkgwH735lc9GPsOwNqAslv4zazhPG0+4WukbIP42FpTUpS36gZQNmJFPmVeto0glEVSV3R8HoBEw+XsGhANG2zz56+4Jx0Z8+Ytm2sMJymbMK7eVJAzbkwbEMW0ByZiE3s81bnpyPB4qnMNGUyRsgk8gKzTIrsFwPZJkpQTHZ6Dfzuk1HB2DSB8jWN+B35QkvhM/Ok8lj2VVQNiRuABZAwnE29ctislcOUnhbwNcixXHNAjelhNaaQaAf8f8kYjOgmwf/FnxsgD+BkAPwbAB6PtGPbZzSkrK7uLUNaA8UuA3wDKunGzZkqfJQB4M1A+ahKvowCsyWxOfj4vAOAXkud4vWxJJvRZgtJApYUwg9AAN84pLuZ3A7DzJmX0CScP0DT02UJzXbwW/xJXFhuh/LghN3cZ50TDRj85CeXbkk9hSiuLAFhdcTG/90712UKLv+hEFBTr9/n8hYbMMZgwB3N2nMS2VKl4aAWGomS+uVN9tjAKRCEJK2hpABuOfTOusBBiRkhWt3ScvKbvjcL7a0aDYXUzfktXn5MBRpceR6HYCGVfWbkUKP879q2oqMqjkw8rB0OyKnZ/e1WP6aIFTwrsC8nKe+nqs0Wez78CKLttv6kS0xtQ1hcnwRqwD1d+jKgqNjV/os8vD2yNGqCKYJ9al44+F15gTVZpzUvZa8njMe6Nm9hLWWPb13/+0P7dVY28r7Bal1HXciRuQFj5Ph19rkAp8wPwo/GDhXVhn9nYkpInZpul0eS2tPJF8VbviG5AKKyMvhMRs8arLyPQUh+wc3bkW08MxcnLqgjKyu2WHuHqpM4KtFKC+OsBeC9mG9ywGPMYNgkrHzcgMpH6Z3gpryXATgFl183rdKYA8HY3wjBVJhNOMaBPrcOxhPI9mmxzndeQE/HxjcjRSl8OUHbIKYbHBPJ/3BiAaTQoK+9bG6C8G1u4scLPWTcA+8DUCOLjW1ySv0Eo32lZRTrMf6Bsvaioabi+ccdH+jvpmAy228oDKRwI32x/EQe+q6Bg+Rw3q2xTRTo111Umchl7S7V5K8WwGO97posq0oURAT7et1I89c1WcsDoATe3JLMq0mlOmlVmToIHgP2YMoJQtj0hziiXAfhWQlYuQuvRjcnlsVUVGcPeXjHn7VPCk9xWPd+yODaP0sCQcQ7qwbsF6kTdGofkdyZgr5gYyWfiKjpnAd4RN5r/FevPK+AlOvH+m8tCsnLOKvu8/tllXV5J2TqtnAjJNx8FYOudN7LtFbV8FqHsTe2ybZ3GftINAPa54dtFNGJvRF0SCiuqFfmWrp/F4oo6XR5/tjlWUqgLStd1O2e/cq3ssAVAVR66Ca0lwK/gBkejCGW/eil7ITbO52MPGx+u8PfKtTsG6/f3iJ3dv4k9Z4YTyDccOC0KilbppPILHxfNnw7o3186cOYsAX5Ju9FpOvkVoOwLAPYypfw+KRMgPv8GO7cvfGiDaDn6i0awZlOb3o/Vaf3+nkQPhZURaTKQl79yKaHspJURta9+rBHcfviCKH2kVlSsbhRNRy6Z1EXqH9JkAkPqsefe6F++ulGULHpGCxejB1y0Tmmy0R4RuaGwctElYWGoSs939om50lQAEgnKyod4WXEkH8YxyqGO0yKt/2ZmFMGzSmkwrO4KyUpvMKwMG66Rw9gXktXWfRFl4WTzdI3OATEb20QK/Q8tH5muHwOYmQAAAABJRU5ErkJggg==" />
                </Link>
                <h1>KUDOBOARD</h1>
            </div>
        </div>
    )
}

export default Header
