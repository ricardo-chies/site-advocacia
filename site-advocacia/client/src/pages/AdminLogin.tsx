import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663314417964/FL8EyJ9BRANQkvye7FFgue/logo-uriel_d175ea8f.png";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const loginMutation = trpc.admin.login.useMutation({
    onSuccess: (data) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminToken', data.adminId.toString());
      }
      setLocation("/admin");
    },
    onError: (err) => {
      setError(err.message || "Falha ao fazer login");
    },
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    loginMutation.mutate({ username, password });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "oklch(16% 0.065 245)" }}
    >
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white p-2">
            <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        <div
          className="rounded-lg p-8 shadow-lg"
          style={{ backgroundColor: "oklch(20% 0.06 245)" }}
        >
          <h1
            className="text-2xl font-bold text-center mb-2"
            style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
          >
            Painel Admin
          </h1>
          <p className="text-center text-sm mb-6" style={{ color: "oklch(70% 0.02 245)" }}>
            Acesso restrito
          </p>

          {error && (
            <div
              className="mb-4 p-3 rounded-lg flex items-center gap-2"
              style={{ backgroundColor: "oklch(30% 0.15 25)" }}
            >
              <AlertCircle className="w-5 h-5" style={{ color: "oklch(60% 0.15 25)" }} />
              <p style={{ color: "oklch(60% 0.15 25)" }} className="text-sm">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "oklch(85% 0.02 245)" }}
              >
                Usuário
              </label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="uriel"
                disabled={loginMutation.isPending}
                className="w-full"
                style={{
                  backgroundColor: "oklch(12% 0.06 245)",
                  borderColor: "oklch(30% 0.06 245)",
                  color: "white",
                }}
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "oklch(85% 0.02 245)" }}
              >
                Senha
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={loginMutation.isPending}
                className="w-full"
                style={{
                  backgroundColor: "oklch(12% 0.06 245)",
                  borderColor: "oklch(30% 0.06 245)",
                  color: "white",
                }}
              />
            </div>

            <Button
              type="submit"
              disabled={loginMutation.isPending || !username || !password}
              className="w-full mt-6 font-semibold"
              style={{
                backgroundColor: "oklch(74% 0.12 80)",
                color: "oklch(16% 0.065 245)",
              }}
            >
              {loginMutation.isPending ? "Conectando..." : "Entrar"}
            </Button>
          </form>

          <p className="text-center text-xs mt-6" style={{ color: "oklch(50% 0.02 245)" }}>
            <Lock className="w-4 h-4 inline mr-1" />
            Acesso restrito a administradores
          </p>
        </div>
      </div>
    </div>
  );
}
