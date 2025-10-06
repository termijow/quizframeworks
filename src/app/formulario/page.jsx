export default function Formulario() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
  };

    return (
        <div>
                  <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div>
          <Input 
            id="email" 
            name="email" 
            type="email"
            autoComplete="email"
            required 
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input 
            id="password" 
            name="password"
            type="password" 
            autoComplete="current-password"
            required 
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex items-center justify-end text-sm">
          <Link className="font-medium text-primary-light hover:text-primary-extra-light" href="#">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </div>
      </form>
        </div>
    )
}