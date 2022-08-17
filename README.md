# XFinca
Plataforma para la administración de condominios o Fincas.

link
```
https://xfinca-54809.firebaseapp.com/
https://xfinca.com
```

```
$ npm start
```

# Mis datos de contacto
```
Marlon Falcón Hernández | España | Madrid
* ERP, CRM y Software: https://www.marlonfalcon.com
» Email: mfalconsoft@gmail.com , falconsof.3d@gmail.com
» Github: https://github.com/falconsoft3d
» linkedin: https://linkedin.com/in/marlon-falcón-3a2aa9a4
```

# Tareas
```
[ ] - Un usuario puede tener varias fincas. Tengo que guardar en el usuario las fincas asignadas.
[ ] - Poder subir adjuntos en Gastos
[ ] - Poder Chatear con otros usuarios
[ ] - Subir los Cobros de dividendo de cada usuario
[ ] - Poder cambiar la contraseña
[ ] - Deploy
```

# Code Sample [ Firebase read list of documento with query ]
```
const myquery = query(
        collection(db, 'expenses'),
        where('building_id', '==', id),
        orderBy('name', 'desc')
    );  

  useEffect(() => {
    onSnapshot(myquery,
        (snapshot) => {
            const data = snapshot.docs.map((documento) => {
                return {...documento.data(), id: documento.id}
            })
            setExpenses(data);
        },
        (error) => {
            console.log(error);
        }
    );
}, []);
```

# Code Sample [ Firebase load one document]
```
useEffect(() => {
       const docRef = doc(db, 'buildings', id)
       
       onSnapshot(docRef, (doc) => {
            // console.log(doc.data(), doc.id)
            setBuilding(doc.data().name)
       });
    },[id]);
```

