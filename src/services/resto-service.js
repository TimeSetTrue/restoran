export default class RestoService {
	_apiBase = 'http://localhost:3000';

	async getResourse(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` +
			  `, received ${res.status}`);
		}
		return await res.json();
	}

	async getMenuItems() {
		return await this.getResourse('/menu/')
	}

	async setOrder(order) {

		if(order == '') {
			return null;
		}

        const response = await fetch(`${this._apiBase}/orderes`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok){
            throw new Error('json error'); 
        }
    }

	// async getMenuId(id) {
	// 	const res = await this.getResourse(`/menu/`);
    //     const item = res.find( (el) => {
    //         console.log(`el.id: ${el.id}, id: ${id}`);
    //         return el.id === +id;
    //     }) 
    //     return item;
	// }
}