const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleGetAllUsers = () => {
    axios
      .get("http://localhost:5555/api/user/",)
      .then((res) => setUsers(res));
  };

  useEffect(() => {
    handleGetAllUsers();
  }, []);


  
  const [FullName,setFullName]=useState("")
  const [Email,setEmail]=useState("")
  const navigate = useNavigate();
 
  const handleUpdateUser = (id) => {
    axios
      .put(`http://localhost:5555/api/user/${id}`).then(() => {
        alert("user modifié avec succes ! ");
       });
     
  
  };

  const [FullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleUpdateUser = () => {
    axios
      .put(`http://localhost:5555/api/user/${id}`)
      .then(() => {
        alert("user modifié avec succes ! ");
      })
      .then(() => {
          navigate("/profile");
        });
  };
